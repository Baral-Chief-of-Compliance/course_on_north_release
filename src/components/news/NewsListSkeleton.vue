<template>
    <v-row>
        <v-col v-if="width >= 1280"></v-col>

        <v-col :cols="[width >= 1280 ? 8 : 12]">
            <template  v-for="n in 3" >
                <v-card
                    height="250"
                    class="mt-5 elevation-6"
                    v-if="width > 659"
                >
                    <v-card-text>
                        <v-row>
                            <v-col :cols="[width > 620 ? 4: 6]">
                                <v-skeleton-loader
                                    type="image"
                                    max-height="300px"
                                    
                                >
                                </v-skeleton-loader>
                            </v-col>

                            <v-col>
                                <v-skeleton-loader
                                    type="list-item-three-line"
                                >
                                </v-skeleton-loader>

                                <v-skeleton-loader
                                    type="subtitle"
                                    max-width="200px"
                                >
                                </v-skeleton-loader>

                                <v-skeleton-loader
                                    type="list-item-three-line"
                                >
                                </v-skeleton-loader>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

                <v-card
                    class="mx-auto mb-5"
                    max-width="344"
                    v-if="width <= 659"
                >

                    <v-skeleton-loader
                        type="image"
                    >
                    </v-skeleton-loader>

                    <v-card-text>
                        <v-skeleton-loader
                            type="list-item-three-line"
                        >
                        </v-skeleton-loader>
                    </v-card-text>

                    <v-card-subtitle>
                        <v-skeleton-loader
                            type="subtitle"
                            max-width="200px"
                        >
                        </v-skeleton-loader>
                    </v-card-subtitle>

                </v-card>
            </template>


        </v-col>

        <v-col v-if="width >= 1280"></v-col>
    </v-row>
</template>

<script>

export default{
    props: {
        width: Number,
        mainColor: String,
        addColor: String
    }
}

</script>
