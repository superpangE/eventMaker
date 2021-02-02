-- Column 테이블
create table eventmaker.Column(
    column_id Integer AUTO_INCREMENT PRIMARY KEY,
    title char(30) not null,
    pos Integer not null,
    create_At DATETIME DEFAULT NOW()
);


-- Card 테이블
create table eventmaker.Card(
  card_id Integer AUTO_INCREMENT not null,
  column_id Integer not null,
  title char(30) not null,
  pos Integer not null,
  content text not null,
  author char(30) not null,
  create_At DATETIME DEFAULT NOW(),
  PRIMARY KEY(card_id),
  FOREIGN KEY(column_id) REFERENCES eventmaker.Column(column_id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 현재 Database들의 character 상태
SELECT schema_name , default_character_set_name FROM information_schema.schemata ;

-- Database의 character 상태를 변경
ALTER DATABASE database_name DEFAULT CHARACTER SET utf8 ;

-- 컬럼 character utf8로 변경
ALTER TABLE eventmaker.Card CONVERT TO character SET utf8;

-- 컬럼 변경 (예시 : title)
ALTER TABLE eventmaker.Card MODIFY title char(30) NOT NULL;