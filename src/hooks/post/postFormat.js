import { calcElapsedTime } from "../../util";

export const postDataFormat = ({
  pk,
  categoryType: { categoryType },
  user: { username, profile, regionDepth2, regionDepth3 },
  boardAnimalTypes,
  elapsedTime,
  Image,
  content,
  likeCount,
  likeCheck,
  viewCount,
  commentCount,
  bookmarkCount,
  bookmarkCheck,
  id,
}) => {
  return {
    boardId: pk || id,
    contentText: content,
    postData: {
      userBadgeData: {
        userName: username,
        //api에서 데이터 빠져서 임의로 이미지 넣은 링크
        imgSrc: profile,
        address: `${regionDepth2} ${regionDepth3}`,
        elapsedTime: elapsedTime,
      },
      mainTag: categoryType,
      subTags: boardAnimalTypes.map((item) => item.animalTypes),
      images: Image,
    },
    postFooterData: {
      likeCount,
      likeCheck,
      bookmarkCount,
      bookmarkCheck,
      commentCount,
      viewCount,
    },
  };
};

export const imageDataFormat = async (Image) => {
  // const imageResponses = await callMultipleImageUrlApi(imageIds);
  const images = Image.map((imgObj) => {
    return {
      id: imgObj.img_path,
      img_path: imgObj.img_path,
      alt: "게시물 이미지",
    };
  });
  return images;
};

export const createPost = async (postData) => {
  const images = await imageDataFormat(postData.Image);
  const elapsedTime = calcElapsedTime(postData.createdDate);
  const post = postDataFormat({ ...postData, elapsedTime, Image: images });
  return post;
};
