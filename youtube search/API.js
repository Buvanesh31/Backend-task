$(document).ready(function () {  
    var API_KEY = "AIzaSyDYT6WABT19vm6BPeg8OKdkRDRPr_lxqqE"  
    var video = '';  
    var search = jQuery("#search").val();  
  
    $("form").submit(function (event) {  
        event.preventDefault();  
        var search=$("#search").val()
        videoSearch(API_KEY, search, 10);  
    });  
  
  
    function videoSearch(key, search, maxResults) {  
          
  
        $.get("https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&order=date&maxResults=" +  
            maxResults + "&q=" + search,  
            function (data) {  
                console.log(data);  
                data.items.forEach(item => {  
                    video = `  
                    <div class="col-md-4"><div class="single-video"><iframe width="100%" height="200"  
src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="5" allowfullscreen >  
</iframe><a href="javascript:void(0);" data-id="${item.id.videoId}" class="fav-add">add to fav</a></div></div>  
  
                `  
                    console.log(video);  
                    jQuery("#videos").append(video);  
  
                });  
            })  
    }  
});  