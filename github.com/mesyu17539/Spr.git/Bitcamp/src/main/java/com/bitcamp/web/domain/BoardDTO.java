package com.bitcamp.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component @Lazy
public class BoardDTO {
	private String bbsSeq,
	title,
	content,
	id,
	regdate;
}
