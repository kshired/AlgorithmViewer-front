import Icon from '@ant-design/icons';
import Baekjoon from './baekjoon.png';
import Programmers from './programmers.png';

const BaekjoonIcon = (props) => (
  <Icon
    component={() => (
      <img
        alt="programmers"
        src={Baekjoon}
        style={{ width: '25px', backgroundColor: 'white', borderRadius: '5px' }}
      />
    )}
    style={{ color: 'white' }}
    {...props}
  />
);

const ProgrammersIcon = (props) => (
  <Icon
    component={() => (
      <img alt="programmers" src={Programmers} style={{ width: '25px' }} />
    )}
    style={{ color: 'white' }}
    {...props}
  />
);

export { BaekjoonIcon, ProgrammersIcon };
