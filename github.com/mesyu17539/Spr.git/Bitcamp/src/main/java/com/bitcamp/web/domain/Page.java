package com.bitcamp.web.domain;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Lazy
public class Page {
	int nowPage//현재 위치한 페이지
		,totalCount//리스트 총 갯수
		,blockSize //화면에 출력할 리스트 갯수
		,startRow// 화면의 리스트 시작
		,endRow// 화면의 리스트 끝
		,pageNum //이동할 페이지
		,startPage// 화면의 페이지 시작
		,endPage// 화면의 페이지 끝
		,pageSize//화면에 보여줄 이동할 페이지 숫자
		,totalPageCount//페이지 총 갯수
		;
		boolean prevBlock;
		
	public boolean isPrevBlock() {
		return prevBlock;
	}
	public void setPrevBlock(boolean prevBlock) {
		this.prevBlock = prevBlock;
	}
	public int getNowPage() {
		return nowPage;
	}
	public void setNowPage(int nowPage) {
		this.nowPage = nowPage;
	}
	public int getBlockSize() {
		return blockSize;
	}
	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}
	public int getStartRow() {
		return startRow;
	}
	public void setStartRow(int startRow) {
		startRow=pageNum*blockSize-blockSize;
		this.startRow = (startRow<0)?1:startRow+1;
	}
	public int getEndRow() {
		return endRow;
	}
	public void setEndRow(int endRow) {
		endRow=pageNum*blockSize-1;
		this.endRow = (endRow>=totalCount)?totalCount+1:endRow+1;
	}
	public int getStartPage() {
		return startPage;
	}
	public void setStartPage(int startPage) {
		startPage=((pageNum-1)/pageSize)*pageSize+1;
		this.startPage = startPage;
	}
	public int getEndPage() {
		return endPage;
	}
	public void setEndPage(int endPage) {
		endPage=((pageNum-1)/pageSize)*pageSize+pageSize;
		this.endPage = (endPage>=totalPageCount)?totalPageCount:endPage;
	}
	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}
	public int getTotalPageCount() {
		return totalPageCount;
	}
	public void setTotalPageCount(int totalPageCount) {
		this.totalPageCount = ((totalCount%blockSize==0)?(totalCount/blockSize):((totalCount/blockSize)+1));
	}
	public List<?> getList() {
		return list;
	}
	/* BlockEnd 1 = pageEnd 5
	 * BlockEnd 2 = pageEnd10
	 * pageBlock 1 : pageEnd 5
	 * pageBlock 2 : pageEnd 10
	 * pageBlock 3 : pageEnd 15
	 * */
	List<?> list;
}
