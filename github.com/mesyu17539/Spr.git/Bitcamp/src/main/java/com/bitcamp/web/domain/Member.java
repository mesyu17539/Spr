package com.bitcamp.web.domain;


import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component @Lazy
public class Member {
	//어소시에이션 방식
	private String id, pass, name,ssn,phone, email,profile,addr;

	
}
