import { Typography, Divider, Image, Card, Avatar } from 'antd';
import avatar from '../icons/avatar.png';

const { Title, Paragraph, Text, Link } = Typography;
const { Meta } = Card;

const Home = () => {
  return (
    <Typography>
      <Title>Algorithm Viewer</Title>
      <Paragraph>
        <blockquote>
          <Text>
            맨날 알고리즘 문제를 풀고 해답 코드를 Github에 push만 하다가 이걸
            간단하게 블로그처럼 시각화 할 수 있을까?{' '}
            <Text delete>(사실 블로깅하기 귀찮아서..)</Text> 생각해서 만들어 본
            것이 이 사이트입니다.
          </Text>{' '}
        </blockquote>
      </Paragraph>
      <Paragraph>
        먼저 이 <Link href="https://github.com/kshired/Algorithms">Repo</Link>에
        문제를 풀고 push하면 Github Webhook이 backend에 요청을 통해 푼 문제들을
        최신으로 업데이트 시킵니다. <Text strong></Text>
      </Paragraph>
      <Paragraph>
        그 후 그 파일들을 읽어와 DB에 저장하고, 그것을 API로 제공하면 코드와
        내용들을 Frontend로 보여줍니다.
      </Paragraph>

      <Title level={3}>만든 사람</Title>

      <Card
        style={{ width: 400 }}
        cover={
          <img
            alt="boj tier"
            src="http://mazassumnida.wtf/api/v2/generate_badge?boj=python4"
          />
        }
      >
        <Link href="https://velog.io/@kshired">
          <Meta
            avatar={<Avatar src={avatar} />}
            title="Kshired"
            description="코더가 아닌 개발자가 되고싶습니다."
          />
        </Link>
      </Card>

      <Divider />
      <Title level={2}>기술 스택</Title>
      <Paragraph>
        <li>Spring Boot</li>
        <li>Spring Data JPA</li>
        <li>MySQL</li>
        <li>Docker</li>
        <li>Github Webhook</li>
        <li>React</li>
      </Paragraph>

      <Divider />
      <Title level={2}>현재 제공되는 기능</Title>
      <Paragraph>
        <li>제출 코드</li>
        <li>문제 링크</li>
        <li>코드 링크</li>
      </Paragraph>
      <Title level={2}>향후 추가 될 기능</Title>
      <Paragraph>
        <li>알고리즘 설명</li>
        <li>문제 태그(분류)</li>
        <li>문제 난이도</li>
      </Paragraph>
    </Typography>
  );
};

export default Home;
