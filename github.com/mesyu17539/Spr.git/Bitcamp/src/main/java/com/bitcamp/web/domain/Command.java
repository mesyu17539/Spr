package com.bitcamp.web.domain;

import java.util.Map;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
import lombok.Data;
 
@Data
@Component
@Lazy
public class Command{
	protected String data1,data2;
	protected int iData1,iData2;
}
