import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  handleClick: () => void;
}

const Like = ({ handleClick }: Props) => {
  const [color, setColor] = useState(false);

  if (color)
    return (
      <AiFillHeart
        color="#ff6b81"
        size={20}
        onClick={() => {
          setColor(false), handleClick();
        }}
      />
    );
  else
    return (
      <AiOutlineHeart
        size={20}
        onClick={() => {
          setColor(true), handleClick();
        }}
      />
    );
};

export default Like;
