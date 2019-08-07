 const truncate = (input) => {
    if (input.length > 85)
       return input.substring(0,85) + '...';
    else
       return input;
 };

export default {truncate}