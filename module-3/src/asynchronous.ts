const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data Fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

// Using Boolean

const makePromise1 = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = false;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};

const getPromiseData1 = async (): Promise<boolean> => {
  const data = await makePromise1();
  return data;
};

// Using Object

const makePromise2 = (): Promise<object> => {
  return new Promise<object>((resolve, reject) => {
    const data: object = { data: "Data is Fetched" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};

const getPromiseData2 = async (): Promise<object> => {
  const data = await makePromise2();
  return data;
};

// Best Practice for object

type DataType = {
  data: string;
};

// we can use Interface also

interface IDataType {
  data: string;
}

const makePromise3 = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: "Data is Fetched" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};

const getPromiseData3 = async (): Promise<DataType> => {
  const data = await makePromise3();
  return data;
};

// we can use Interface also

interface IDataType {
  data: string;
}

const makePromise4 = (): Promise<IDataType> => {
  return new Promise<IDataType>((resolve, reject) => {
    const data: IDataType = { data: "Data is Fetched" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to fetch");
    }
  });
};

const getPromiseData4 = async (): Promise<IDataType> => {
  const data = await makePromise4();
  return data;
};
