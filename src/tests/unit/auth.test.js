const auth = require("../../services/authService");
let server;

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Middleware", () => {
 const  res = mockResponse();
    

 const next = jest.fn();

  beforeEach(() => {
    server = require("./helper");
  });

  /*afterEach(async () => {
    server.close();
  });*/

  
  it("Should set status to 401 if not police", () => {
    const req = {
        session: {
          level: 1,
        },
      };
      
    
    auth.isPoliceLoggedIn(req, res, next);
    
    expect(res.status).toBeCalledWith(401);
    expect(res.json).toHaveBeenCalled();
  });
  it("Should set status to 401 if not lawyer", () => {
    const req = {
        session: {
          level: 2,
        },
      };
      
    
    auth.isLawyerLoggedIn(req, res, next);
    
    expect(res.status).toBeCalledWith(401);
    expect(res.json).toHaveBeenCalled();
  });
  it("Should set status to 401 if not people", () => {
    const req = {
        session: {
          level:1,
        },
      };
      
    
    auth.isPeopleLoggedIn(req, res, next);
    
    expect(res.status).toBeCalledWith(401);
    expect(res.json).toHaveBeenCalled();
  });
  it("Should set status to 401 if not loggedin", () => {
    const req = {
        session: {
          level:null
        },
      };
      
    
    auth.isLoggedIn(req, res, next);
    
    expect(res.status).toBeCalledWith(401);
    expect(res.json).toHaveBeenCalled();
  });

  it("Should call next if request session level is lawyer", () => {
    const req = {
      session: {
        level: 1,
      },
    };
    auth.isLawyerLoggedIn(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it("Should call next if request session level is people", () => {
    const req = {
      session: {
        level: 0,
      },
    };
    auth.isPeopleLoggedIn(req, res, next);
    expect(next).toHaveBeenCalled();
  });


  it("Should call next if loggedin", () => {
    const req = {
      session: {
        level: true,
      },
    };
    auth.isLoggedIn(req, res, next);
    expect(next).toHaveBeenCalled();
  });
  it("Should call next if request session level is police", () => {
    const req = {
      session: {
        level: 2,
      },
    };
    
    auth.isPoliceLoggedIn(req, res, next);
   
    expect(next).toHaveBeenCalled();
  });
});

describe("anyPage Middleware", () => {
    
  });
  


