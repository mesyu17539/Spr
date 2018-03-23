package com.bitcamp.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/member")
public class MemberController {
	private static final Logger logger=LoggerFactory.getLogger(MemberController.class);

	
	@RequestMapping(value="/login",
			method=RequestMethod.POST,
			consumes="application/json")
	public @ResponseBody Map<?,?> login(
			@RequestBody Object m){
		Map<String,String> map=new HashMap<>();
		logger.info("welcom {}","Member");
		logger.info("id {}","");
		logger.info("pass {}","");
		map.put("flag", "success");
		return map;
	}
	
}
