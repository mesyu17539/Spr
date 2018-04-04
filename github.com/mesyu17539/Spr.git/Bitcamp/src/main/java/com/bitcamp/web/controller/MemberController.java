package com.bitcamp.web.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.bitcamp.web.domain.Admin;
import com.bitcamp.web.domain.Board;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.Image;
import com.bitcamp.web.domain.Member;
import com.bitcamp.web.domain.Page;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;
import com.bitcamp.web.service.IGetService;
import com.bitcamp.web.service.ISerachService;
import com.bitcamp.web.util.FileProxy;
import com.bitcamp.web.util.PageAdaptor;

//resController을 사용하여 SOP방식을 사용하게 해야된다.
//RestController을 사용하면 리스폰스 바디가 생략이 된다.
@RestController
@RequestMapping("")
public class MemberController {
	private static final Logger logger=LoggerFactory.getLogger(MemberController.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	@Autowired Page page;
	@Autowired PageAdaptor adapter;
	@Autowired Image image;
	
	
	@RequestMapping(value="/search/{keyword}")
	public Object searchOne(
			@PathVariable("keyword") String keyword,//여러개 있으면 ("") 해줘야함
			@RequestBody HashMap<String, String> param
			){
		Map<String,Object> map=new HashMap<>();
		logger.info("welcom {}","search "+keyword);
		Object o=null;
		switch (param.get("type")) {
		case "member":
			System.out.println("mem");
			param.put("colum", "id");
			o= new ISerachService() {
				@Override
				public Object excute(HashMap<?, ?> param) {
					return mapper.searchAll(param);
				}
			}.excute(param);
			break;
		case "admin":
			System.out.println("adm");
			param.put("colum", "adm_id");
			o=  new ISerachService() {
				@Override
				public Object excute(HashMap<?, ?> param) {
					// TODO Auto-generated method stub
					return mapper.searchAll(param);
				}
			}.excute(param);
			break;
		default:
			break;
		}
		System.out.println("넘길 값 : "+o);
		return o;
	}
	@RequestMapping(value="/admin",
			method=RequestMethod.POST,
			consumes="application/json")
	public /*@ResponseBody*/ Map<?,?> admin(
			@RequestBody Admin a){
		Map<String,Object> map=new HashMap<>();
		logger.info("welcom {}","admin");
		logger.info("id {}",a.getAdmID());
		cmd=new Command();
		cmd.setData1(a.getAdmID());
		map.put("admin",(Admin) new IGetService() {
			
			@Override
			public Object execute(Command cmd) {
				// TODO Auto-generated method stub
				return mapper.selectAdmin(cmd);
			}
		}.execute(cmd));
		return map;
	}
//	restful 방식 : 쿼리스트링을 날리는 방식. post로 보안 조치
	@RequestMapping(value="/{type}/{userid}/login",
			method=RequestMethod.POST,
			consumes="application/json")
	public /*@ResponseBody*/ Map<?,?> login(
			@PathVariable String type,
			@PathVariable String userid,
			@RequestBody Member m){
		Map<String,Object> map=new HashMap<>();
		logger.info("welcom {}","Member");
		logger.info("id {}",userid);
		logger.info("pass {}",m.getPass());
		cmd=new Command();
		cmd.setType(type);
		switch (type) {
		case "member":
			cmd.setId("id");
			cmd.setPass("pass");
			break;
		case "admin":
			cmd.setId("admID");
			cmd.setPass("pass");
			break;
		default:
			break;
		}
		cmd.setData1(userid);
		cmd.setData2(m.getPass());
		int count=new ICountService() {
			@Override
			public int excute(Command cmd) {
				// TODO Auto-generated method stub
				return mapper.exist(cmd);
			}
		}.excute(cmd);
		
		System.out.println("count : "+count);
		map.put("success", count+"");
		System.out.println("success : "+map.get("success"));
		
		if(count==1) {
			System.out.println("저장? : "+count);
			switch (type) {
			case "member":
				map.put("user", (Member) new IGetService() {
					
					@Override
					public Object execute(Command cmd) {
						// TODO Auto-generated method stub
						return mapper.selectById(cmd);
					}
				}.execute(cmd));
				System.out.println("user : "+map.get("user"));
				break;
			case "admin":
				map.put("admin",(Admin) new IGetService() {
					
					@Override
					public Object execute(Command cmd) {
						// TODO Auto-generated method stub
						return mapper.selectAdmin(cmd);
					}
				}.execute(cmd));
				System.out.println("admin : "+map.get("admin"));
				break;
			default:
				break;
			}
		}
		return map;
	}
	@RequestMapping(value="/articles/{pageNum}")
	public Map<?,?> getArticles(
			@PathVariable String pageNum){
		logger.info("welcom control {}","getArticles");
		Map<String, Object> map = new HashMap<>();
		page.setPageNum(Integer.parseInt(pageNum));
		page.setPageSize(5);
		page.setNowPage(1);
		page.setBlockSize(5);
		page.setTotalCount((int) new IGetService() {
			@Override
			public Object execute(Command cmd) {
				// TODO Auto-generated method stub
				return mapper.selectCount();
			}
		}.execute(cmd));
		page=(Page) adapter.attr(page);
		
		cmd.setIData1(page.getStartRow());
		cmd.setIData2(page.getEndRow());
		logger.info("cmd.getData1 {}",cmd.getIData1());
		logger.info("cmd.getData2 {}",cmd.getIData2());
		logger.info("cmd.getPageNum {}",page.getPageNum());
		logger.info("cmd.getStartPage {}",page.getStartPage());
		logger.info("cmd.getEndRow {}",page.getEndRow());
		logger.info("cmd.getStartRow {}",page.getStartRow());
		logger.info("cmd.getEndPage {}",page.getEndPage());
		logger.info("cmd.getTotalPageCount {}",page.getTotalPageCount());
		List<?> list= (List<?>) new IGetService() {
			@Override
			public Object execute(Command cmd) {
				// TODO Auto-generated method stub
				return mapper.articles(cmd);
			}
		}.execute(cmd);
		map.put("list", list);
		map.put("page", page);
		return map;
	}
	@RequestMapping(value="/write")
	public Map<?,?> Write(){
		Map<String,	Object> map=new HashMap<>();
		logger.info("Write {}","써라써");
		return map;
	}
	@RequestMapping(value="/board/{seq}",
			method=RequestMethod.GET,
			consumes="application/json")
	public Map<?,?> getArticle(
			@PathVariable String seq){
		Map<String,	Object> map=new HashMap<>();
		return map;
	}
	//restful 방식 패턴 : /{값}
	@RequestMapping(value="/boards/{seq}",
			method=RequestMethod.PUT,
			consumes="application/json")
	public Map<?,?> putBoard(
			@PathVariable String seq){
		Map<String,	Object> map=new HashMap<>();
		return map;
	}
	@RequestMapping(value="/board/post/article",
			method=RequestMethod.POST,
			consumes="application/json")
	public Map<?,?> postArticle(
			@RequestBody Board board){
		Map<String,	Object> map=new HashMap<>();
		System.out.println("넘어온 ID : "+board.getId());
		System.out.println("넘어온 Title : "+board.getTitle());
		System.out.println("넘어온 Content : "+board.getContent());
		return map;
	}
	@RequestMapping(value="/board/file/upload",
			method=RequestMethod.POST)
	public Map<?,?> boardFileUpload(
			MultipartHttpServletRequest request
			,HttpSession session
			)throws IllegalStateException, IOException {
		Map<String,	Object> map=new HashMap<>();
		logger.info("MemberController fileupload");
		//어플리케이션 컨텍스트의 bean으로 인해 파일명 사용할수 있다.
		FileProxy pxy=new FileProxy();
		Iterator<String> it=request.getFileNames();
		if(it.hasNext()) {
			MultipartFile file=request.getFile(it.next());
			String rootPath=request.getSession().getServletContext().toString();
			String uploadPath="resources/image/";
			String filename=file.getOriginalFilename();
			image.setImageID(
					new SimpleDateFormat("yyMMdd_hhmmss_").format(new Date()));
			image.setFilename(filename);
		}
//				pxy.getFile().getOriginalFilename();
//		String path=ImageRepo.UPLOAD_PATH.toString()+fileName;
//		File files=new File(path);
//		pxy.getFile().transferTo(files);
		System.out.println("넘어온 ID : ");
		System.out.println("넘어온 Title : ");
		System.out.println("넘어온 Content : ");
		return map;
	}
}
