import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  handleClick: () => void;
}

const Like = ({ handleClick }: Props) => {
  const [heart, setHeart] = useState(false);

  const toggle = () => {
    setHeart(!heart), handleClick();
  };

  if (heart) {
    return (
      <AiFillHeart color="#ff6b81" size={40} onClick={toggle}></AiFillHeart>
    );
  }
  return <AiOutlineHeart size={40} onClick={toggle} />;
};

export default Like;
