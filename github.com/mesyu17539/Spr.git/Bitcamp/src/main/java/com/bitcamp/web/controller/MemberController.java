package com.bitcamp.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bitcamp.web.domain.Command;
import com.bitcamp.web.domain.MemberDTO;
import com.bitcamp.web.mapper.Mapper;
import com.bitcamp.web.service.ICountService;
import com.bitcamp.web.service.IGetService;

//resController을 사용하여 SOP방식을 사용하게 해야된다.
//RestController을 사용하면 리스폰스 바디가 생략이 된다.
@RestController
@RequestMapping(value="/member")
public class MemberController {
	private static final Logger logger=LoggerFactory.getLogger(MemberController.class);
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	
	@RequestMapping(value="/login",
			method=RequestMethod.POST,
			consumes="application/json")
	public /*@ResponseBody*/ Map<?,?> login(
			@RequestBody MemberDTO m){
		Map<String,Object> map=new HashMap<>();
		logger.info("welcom {}","Member");
		logger.info("id {}",((MemberDTO) m));
		logger.info("pass {}","");
		cmd=new Command();
		cmd.setData1(m.getId());
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
	
}
