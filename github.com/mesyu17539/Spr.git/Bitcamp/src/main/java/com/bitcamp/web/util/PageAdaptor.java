package com.bitcamp.web.util;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bitcamp.web.domain.Page;

import lombok.Data;

@Component
public class PageAdaptor {
	public Object attr(Page page) {
		page.setTotalCount(0);
		page.setTotalPageCount(0);
		page.setEndRow(0);
		page.setStartRow(0);
		page.setStartPage(0);
		page.setEndPage(0);
		return "";
	}
	/* BlockEnd 1 = pageEnd 5
	 * BlockEnd 2 = pageEnd10
	 * pageBlock 1 : pageEnd 5
	 * pageBlock 2 : pageEnd 10
	 * pageBlock 3 : pageEnd 15
	 * */
	List<?> list;
}
