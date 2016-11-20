  var arr=[
    {id:'1001',name:'板块列表',href:'board'},
    {id:'1002',name:'板块统计',href:'board'}
  ];
  $('#menu-board').click(function(){
    // $('#main').html('');
    var str;
    var list="";
    for (var i=0;i<arr.length;i++)
    {
        //list +="<li>"+arr[i].name+"</li>";
        //<a href="arr[i].href"><li></li></a>
        list += "<a href=\"\#\/" + arr[i].href +"\"><li>" + arr[i].name + "</li></a>";
        //console.log(list);
    }
    document.getElementById('menu-slide-right-left').innerHTML = list;
  });
  var arrf=[
    {id:'1003',name:'分类列表',href:'classify'},
    {id:'1004',name:'分类统计',href:'classify'}
  ];
  $('#menu-classify').click(function(){
    // $('#main').html('');
    var str;
    var list="";
    for (var i=0;i<arrf.length;i++)
    {
        //list +="<li>"+arr[i].name+"</li>";
        //<a href="arr[i].href"><li></li></a>
        list += "<a href=\"\#\/" + arrf[i].href +"\"><li>" + arrf[i].name + "</li></a>";
        //console.log(list);
    }
    document.getElementById('menu-slide-right-left').innerHTML = list;
  });
  var arrt=[
    {id:'1005',name:'来源列表',href:'from'},
    {id:'1006',name:'来源统计',href:'from'}
  ];
  $('#menu-from').click(function(){
    // $('#main').html('');
    var str;
    var list="";
    for (var i=0;i<arrt.length;i++)
    {
        //list +="<li>"+arr[i].name+"</li>";
        //<a href="arr[i].href"><li></li></a>
        list += "<a href=\"\#\/" + arrt[i].href +"\"><li>" + arrt[i].name + "</li></a>";
        //console.log(list);
    }
    document.getElementById('menu-slide-right-left').innerHTML = list;
  });
  var arrg=[
    {id:'1007',name:'添加内容',href:'editor'},
    {id:'1008',name:'查看内容',href:'content'}
  ];
  $('#menu-content').click(function(){
    // $('#main').html('');
    var str;
    var list="";
    for (var i=0;i<arrg.length;i++)
    {
        //list +="<li>"+arr[i].name+"</li>";
        //<a href="arr[i].href"><li></li></a>
        list += "<a href=\"\#\/" + arrg[i].href +"\"><li>" + arrg[i].name + "</li></a>";
        //console.log(list);
    }
    document.getElementById('menu-slide-right-left').innerHTML = list;
  });
  var arrl=[
    {id:'1009',name:'系统用户',href:'user'},
    {id:'1010',name:'用户组',href:'group'}
  ];
  $('#menu-permission').click(function(){
    // $('#main').html('');
    var str;
    var list="";
    for (var i=0;i<arrl.length;i++)
    {
        //list +="<li>"+arr[i].name+"</li>";
        //<a href="arr[i].href"><li></li></a>
        list += "<a href=\"\#\/" + arrl[i].href +"\"><li>" + arrl[i].name + "</li></a>";
        //console.log(list);
    }
    document.getElementById('menu-slide-right-left').innerHTML = list;
  });



  $('#menu-slide-left li').click(function(){
    $('#menu-slide-left li').removeClass('left-active');
    $(this).addClass('left-active');
  });
  $('#menu-slide-right-left').on("click","li",function(){
    $('#menu-slide-right-left li').removeClass('right-active');
    $(this).addClass('right-active');
  });

