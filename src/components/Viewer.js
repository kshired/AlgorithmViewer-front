import { PageHeader, Rate, Tag } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

  return (
    <>
      <PageHeader className="problem-title" title="보물" subTitle=" 1026">
        <>
          <Tag color="magenta">수학</Tag>
          <Tag color="red">정렬</Tag>
        </>
        <br />
        <Rate disabled allowHalf defaultValue={2.5} />
      </PageHeader>

      <SyntaxHighlighter language="python" style={vscDarkPlus}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

export default Viewer;
