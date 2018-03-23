package com.bitcamp.web.service;

import org.springframework.stereotype.Service;

import com.bitcamp.web.domain.Command;
// 삼성 같은 곳 빼고는 안씀
@Service
public interface DeleteService {
	public void excute(Command cmd);
}
