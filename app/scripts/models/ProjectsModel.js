var NewProjectsModel = function() {


  //public attributes and methods ----------------------------------------------

  return {

    list: null,

    load: function(dataArray){
      this.list = dataArray;
      this.eventDispatcher.broadcast("projectsModelLoaded");
    },
  };

};