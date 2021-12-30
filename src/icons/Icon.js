import Icon from "@ant-design/icons";
import Baekjoon from "./baekjoon.png";
import Programmers from "./programmers.png";
import LeetCode from "./leetcode.png";

const BaekjoonIcon = (props) => (
  <Icon
    component={() => (
      <img
        alt="programmers"
        src={Baekjoon}
        style={{ width: "32px", backgroundColor: "white", borderRadius: "5px" }}
      />
    )}
    style={{ color: "white" }}
    {...props}
  />
);

const ProgrammersIcon = (props) => (
  <Icon
    component={() => (
      <img alt="programmers" src={Programmers} style={{ width: "32px" }} />
    )}
    style={{ color: "white" }}
    {...props}
  />
);

const LeetCodeIcon = (props) => (
  <Icon
    component={() => (
      <img
        alt="leetcode"
        src={LeetCode}
        style={{ width: "32px", backgroundColor: "grey", borderRadius: "5px" }}
      />
    )}
    style={{ color: "white" }}
    {...props}
  />
);

export { BaekjoonIcon, ProgrammersIcon, LeetCodeIcon };
