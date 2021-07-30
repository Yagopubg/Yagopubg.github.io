const btn = document.querySelector('.middle_btn');
btn.onmousemove = function(e){
    const x = e.pageX = btn.offsetLeft;
    const y = e.pageY = btn.offsetTop;

    btn.style.setProperty('--x' , x + 'px');
    btn.style.setProperty('--y' , y + 'px');
}
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change' , () => {
    document.body.classList.toggle('dark')
    

    
})
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick =()=>{
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
  searchInput.focus();
  if(searchInput.value != ""){
    var values = searchInput.value;
    searchData.classList.remove("active");
    searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
  }else{
    searchData.textContent = "";
  }
}
cancelBtn.onclick =()=>{
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchData.classList.toggle("active");
  searchInput.value = "";
}

