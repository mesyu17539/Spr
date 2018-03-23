package com.bitcamp.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class BoardDTO {
	private String bbsSeq,title,content,regdate,userid;
}
