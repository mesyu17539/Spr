package com.bitcamp.web.domain;

import java.util.Map;
import org.springframework.stereotype.Component;
import lombok.Data;
 
@Data
@Component
public class Command{
	protected Map<?, ?> cmd;
}
