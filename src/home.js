export function createHome(){
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('homeDiv');

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.innerHTML = '<h1>Welcome to our restaurant!</h1><p> We serve the best food in town! Lorem ipsum odor amet, consectetuer adipiscing elit. Mi tristique potenti pulvinar rhoncus ipsum a fames libero. Leo penatibus ultricies etiam accumsan finibus semper eget mattis. Donec bibendum porta nascetur luctus, lectus odio vestibulum. Pretium lorem netus mattis facilisi lacinia quis finibus tortor.</p>';

    const imgdiv = document.createElement('div');
    imgdiv.classList.add('imgdiv');
    imgdiv.innerHTML = '<img src="https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=1024x1024&w=is&k=20&c=pk85QHhpHZkxY6TrpV72yFLIIFQrNe7I2neY_y2gE6Q=" alt="restaurant image">'; 
    
    homeDiv.appendChild(heading);
    homeDiv.appendChild(imgdiv);
    return homeDiv
}