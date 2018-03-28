CREATE TABLE MEMBER
(
   id         varchar(20),
   pass       varchar(20),
   name       varchar(20),
   ssn        varchar(20),
   phone      varchar(20),
   email      varchar(20),
   profile    varchar(20),
   addr       varchar(20),
   PRIMARY KEY(id)
);

INSERT INTO member
     VALUES ('ccc',
             'ccc',
             '장만호',
             '911123-1111111',
             '010-5604-1198',
             'jmh3360@naver.com',
             'default_image',
             '광명');

SELECT * FROM board;
SELECT * FROM member;

CREATE TABLE board
(
   bbs_seq    int AUTO_INCREMENT PRIMARY KEY,
   title      varchar(100),
   content    varchar(800),
   id         varchar(20),
   regdate    timestamp NOT NULL DEFAULT now(),
   FOREIGN KEY(id) REFERENCES Member(id)
);

INSERT INTO board(title, content, id)
     VALUES ('zz', 'xx', 'ccc');
	 
INSERT INTO board(title, content, id)
        VALUES (
                  '안녕하세요',
                  '안녕하세요 만나서 반갑습니다',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '안녕하세요',
                  '안녕하세요 만나서 반갑습니다',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '궁금합니다',
                  '이건 얼마인지 궁금합니다',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '몇살이세요',
                  '당신의 나이가 몇살입니까',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '얼마입니까',
                  '이물건은 대체 얼마입니까',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '문의합니다',
                  '혹시나 한번더 문의합니다',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '가능한가요',
                  '교환 하고 싶은데 가능한가요',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '이거맞나요',
                  '제가 산거랑 색이 다른데 이거맞나요',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '실수입니다',
                  '잘못 알고 올렸습니다 실수입니다',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '틀렸습니다',
                  '당신이 알려준 정보가 틀렸습니다',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '죄송합니다',
                  '지금 말한걸 못알아 듣겠네요 죄송합니다',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '이게맞습니까',
                  '제가 구매한 상품이 이게맞습니까',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '얼마나깁니까',
                  '이옷의 기장은 얼마나깁니까',
                  'ccc');
INSERT INTO board(title, content, id)
        VALUES (
                  '가능합니까',
                  '혹시나 새제품으로 교환 가능합니까',
                  'ccc');