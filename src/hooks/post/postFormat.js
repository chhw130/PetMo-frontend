//import { callMultipleImageUrlApi } from "../../api";
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
  viewCount,
  commentCount,
  bookmarkCount,
}) => {
  return {
    pk: pk,
    contentText: content,
    postData: {
      userBadgeData: {
        userName: username,
        //api에서 데이터 빠져서 임의로 이미지 넣은 링크
        profile: profile,
        address: `${regionDepth2} ${regionDepth3}`,
        elapsedTime: elapsedTime,
      },
      mainTag: categoryType,
      subTags: boardAnimalTypes.map((item) => item.animalTypes),
      Image: Image,
    },
    postFooterData: {
      likeCount,
      bookmarkCount,
      commentCount,
      viewCount,
    },
  };
};

export const imageDataFormat = async (Image) => {
  console.log(Image);
  //const imageResponses = await callMultipleImageUrlApi(imageIds);
  const images = Image.map((imgObj) => {
    console.log("41", imgObj);
    return {
      id: imgObj.img_path,
      img_path: imgObj.img_path,
      alt: "게시물 이미지",
    };
  });
  return images;
};

export const createPost = async (postData) => {
  console.log("2", postData.Image);
  const images = await imageDataFormat(postData.Image);
  const elapsedTime = calcElapsedTime(postData.createdDate);
  const post = postDataFormat({ ...postData, elapsedTime, Image: images });
  console.log("post", post);
  return post;
};
