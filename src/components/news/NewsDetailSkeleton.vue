<template>
        <v-skeleton-loader 
            max-width="100%" 
            type="list-item"
        >
        </v-skeleton-loader>

        <v-skeleton-loader 
            max-width="100%" 
            type="list-item"
        >
        </v-skeleton-loader>

        <v-skeleton-loader
                type="subtitle"
                max-width="350px" 
            >
        </v-skeleton-loader>

        <v-divider class="border-opacity-75 mb-5 mt-2" ></v-divider>

        <v-skeleton-loader v-for="n in 8"
            type="paragraph"
            max-width="100%" 
        >
        </v-skeleton-loader>
</template>

<script>

</script>