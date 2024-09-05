export const API_KEY = 'AIzaSyBs8re5sJMutPdZFvVFAV1QDr7_OZNKFdU'


export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M"
    }
    else if (value>=1000)
    {
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}