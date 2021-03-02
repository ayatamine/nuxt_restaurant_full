<template>
    <div>
        nested route with params {{$route.params.id}}
    </div>
</template>
<script>
export default {

    validate(data){
        //query
        //params
        //store
         return data.params.id == 1;
    },
    layout:'menu'
    //error layout
}
</script>