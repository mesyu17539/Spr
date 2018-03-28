package com.bitcamp.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bitcamp.web.domain.BoardDTO;
import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.MemberDTO;
import com.bitcamp.web.domain.Page;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;
import com.bitcamp.web.service.IGetService;
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
//	restful 방식 : 쿼리스트링을 날리는 방식. post로 보안 조치
	@RequestMapping(value="/members/{userid}/login",
			method=RequestMethod.POST,
			consumes="application/json")
	public /*@ResponseBody*/ Map<?,?> login(
			@PathVariable String userid,
			@RequestBody MemberDTO m){
		Map<String,Object> map=new HashMap<>();
		logger.info("welcom {}","Member");
		logger.info("id {}",userid);
		logger.info("pass {}",m.getPass());
		cmd=new Command();
		cmd.setData1(userid);
		cmd.setData2(m.getPass());
//		map.put("success", ""+new ICountService() {
//			@Override
//			public int excute(Command cmd) {
//				// TODO Auto-generated method stub
//				return mapper.exist(cmd);
//			}
//		}.excute(cmd));
		int count = new ICountService() {
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
			map.put("user", (MemberDTO) new IGetService() {
				
				@Override
				public Object execute(Command cmd) {
					// TODO Auto-generated method stub
					return mapper.selectById(cmd);
				}
			}.execute(cmd));
			System.out.println("user : "+map.get("user"));
		}
		return map;
	}
	@RequestMapping(value="/articles")
	public Map<?,?> getArticles(){
		logger.info("welcom control {}","getArticles");
		Map<String, Object> map = new HashMap<>();
		page.setPageNum(1);
		page.setBlockSize(5);
		page.setPageSize(5);
		page.setTotalCount(0);
		page=(Page) adapter.attr(page);
		cmd.setData1(page.getStartPage()+"");
		cmd.setData1(page.getEndPage()+"");
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
}
