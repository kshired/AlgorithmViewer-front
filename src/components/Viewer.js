import { PageHeader, Rate, Tag, Empty, Typography } from "antd";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const { Paragraph } = Typography;

const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const Viewer = () => {
  const codeString = `# https://acmicpc.net/problem/1026
# 보물

import sys
input = lambda : sys.stdin.readline().rstrip()
input_multiple_int = lambda : map(int,input().split())

N = int(input())
A = list(input_multiple_int())
B = list(input_multiple_int())
res = 0

A.sort()
B.sort(reverse=True)

for i in range(N):
    res += A[i]*B[i]

print(res)`;
  const codeString1 = "";

  return (
    <>
      {codeString.length === 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{
            height: "80vh",
          }}
        />
      ) : (
        <div
          style={{
            height: "80vh",
          }}
        >
          <PageHeader
            className="problem-title"
            title="보물"
            subTitle=" 1026"
            tags={[
              <Tag color="magenta">수학</Tag>,
              <Tag color="red">정렬</Tag>,
            ]}
            extra={[<Rate disabled allowHalf defaultValue={2.5} />]}
          ></PageHeader>
          <SyntaxHighlighter language="python" style={vscDarkPlus}>
            {codeString}
          </SyntaxHighlighter>
          <Paragraph>
            Ant Design interprets the color system into two levels: a
            system-level color system and a product-level color system.
          </Paragraph>
          <Paragraph>
            Ant Design&#x27;s design team preferred to design with the HSB color
            model, which makes it easier for designers to have a clear
            psychological expectation of color when adjusting colors,:well as
            facilitate communication in teams.
          </Paragraph>
          <div>
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
              text="문제 풀러가기"
            />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
              text="코드 자세히 보기"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Viewer;
