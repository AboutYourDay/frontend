interface Diary {
  did: string;
  uid: string;
  imageURL: string;
  textAttr: {
    text: string,
    alignHorizontal: string,
    alignVertical: string,
    fontSize: number,
    fontWeight: number,
    italic: boolean,
    underline: boolean,
    color: string,
  };
  createdAt: number;
  editedAt: number;
  emotion: string;
}

export default Diary;
