import { PageHeader, Rate, Tag, Empty, Typography } from "antd";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";

const { Paragraph } = Typography;

const IconLink = ({ src, text, target }) => (
  <a
    className="example-link"
    href={target}
    onClick={() => {
      if (target === null) {
        alert("문제를 찾을 수 없습니다.");
      }
    }}
  >
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const Viewer = ({ id }) => {
  const [problem, setProblem] = useState(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [target, setTarget] = useState("");

  useEffect(() => {
    if (id === null) {
      return;
    }
    axios.get(`http://localhost:8080/problems/${id}`).then((res) => {
      setProblem(res.data);
      if (res.data.site === "PROGRAMMERS") {
        setTitle(res.data.name.replaceAll("_", " "));
        setSubTitle("");
        const tmpUrl = res.data.code.split("\n")[0].substr(2);
        if (tmpUrl.includes("programmers")) {
          setUrl(tmpUrl);
        } else {
          setUrl(null);
        }
      } else if (res.data.site === "BAEKJOON") {
        setTitle(res.data.code.split("\n")[1].substr(2));
        setSubTitle(res.data.name);
        setUrl(`https://boj.kr/${res.data.name}`);
      } else if (res.data.site === "LEETCODE") {
        setTitle(res.data.code.split("\n")[1].substr(2));
        setUrl(res.data.code.split("\n")[0].substr(2));
      }
      setTarget(`/${res.data.site.toLowerCase()}/${res.data.name}.py`);
    });
  }, [id]);

  return (
    <>
      {problem === null || id === null ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{
            height: "80vh",
          }}
        />
      ) : (
        <div
          style={{
            minHeight: "85vh",
          }}
        >
          <PageHeader
            className="problem-title"
            title={title}
            subTitle={subTitle}
            // tags={[
            //   <Tag color="magenta">수학</Tag>,
            //   <Tag color="red">정렬</Tag>,
            // ]}
            // extra={[<Rate disabled allowHalf defaultValue={2.5} />]}
          ></PageHeader>
          <SyntaxHighlighter
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
            wrapLines={true}
            language="python"
            style={vscDarkPlus}
          >
            {problem.code}
          </SyntaxHighlighter>
          {/* <Paragraph>
            Ant Design interprets the color system into two levels: a
            system-level color system and a product-level color system.
          </Paragraph>
          <Paragraph>
            Ant Design&#x27;s design team preferred to design with the HSB color
            model, which makes it easier for designers to have a clear
            psychological expectation of color when adjusting colors,:well as
            facilitate communication in teams.
          </Paragraph> */}
          <div style={{ marginTop: "3vh" }}>
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
              text="문제 풀러가기"
              target={url}
            />
            <IconLink
              src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
              text="코드 자세히 보기"
              target={
                "https://github.com/kshired/Algorithms/blob/main" + target
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Viewer;
