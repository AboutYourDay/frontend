interface Diary {
  _id: string;
  uid: string;
  imageAttr: {
    width: number;
    height: number;
    imageURL: string;
  };
  textAttr: {
    text: string,
    alignHorizontal: string,
    alignVertical: string,
    fontSize: number,
    fontWeight: number,
    italic: boolean,
    underline: boolean,
    color: string,
    blur: number
  };
  createdAt: number;
  editedAt: number;
  emotion: string;
}

export default Diary;
