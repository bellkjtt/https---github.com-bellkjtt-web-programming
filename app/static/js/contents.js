var Util = {
    round:function(data){
        return Math.round(Number(data)*100)/100;
    }
}

var Event = {
  getContents: function () {
    $(".search").on("click", function () {
      //클릭이 발생했을 때 실행
      var addr = $(".input-address").val(); //input에 있는 value를 가져온다
      var url = "https://apis.zigbang.com/v2/search?leaseYn=N&q=" + addr + "&serviceType=원룸";

      $.getJSON(url, function (response) {
        console.log(response.items); 
        var items = response.items;
        var tag='';
        for(var i =0; i<items.length; i++){
            tag += '<tr>';
            tag += '    <td>' + (i + 1) + '</td>';
            tag += '    <td>' + items[i].id + '</td>'; //각각의 items에 있는 걸 넣어준다.
            tag += '    <td>' + items[i].name + '</td>';
            tag += '    <td>' + Util.round(items[i].lat) + '</td>';
            tag += '    <td>' + Util.round(items[i].lng) + '</td>';
            tag += '    <td>' + items[i].description + '</td>';
            tag += '</tr>';
            
            }
            $('.table-wrap > table > tbody').html(tag);
            $('.table-wrap').show();
      });
    });
  },
};
Event.getContents();































