package com.bitcamp.web.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bitcamp.web.domain.Command;
import com.bitcamp.web.mapper.Mapper;

@Service
//@Transactional
public class TXService implements ITXService{
//	@Transactional 는 롤백 위해서 사용 하지만 오래오래오레오걸림
	@Autowired Mapper mapper;
	@Autowired Command cmd;
	
//	
	@Override @Transactional
	public Object withdraw(HashMap<?, ?> param) {
		mapper.exist(cmd);
		mapper.insertMember(cmd);
		mapper.selectAdmin(cmd);
		return null;
	}
	@Override @Transactional
	public Object withdraw2(HashMap<?, ?> param) {
		mapper.exist(cmd);
		mapper.insertMember(cmd);
		mapper.selectAdmin(cmd);
		return null;
	}
}
