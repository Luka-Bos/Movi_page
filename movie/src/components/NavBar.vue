<templete>
  <nav>
  <v-system-bar app dark>
    <v-spacer></v-spacer>
    <v-icon>mdi-minus</v-icon>
    <v-icon>mdi-checkbox-blank-outline</v-icon>
    <v-icon>mdi-close</v-icon>
  </v-system-bar>
  <v-app-bar app color="lightblue" dark>
  <v-icon class="mr-2">fas fa-video</v-icon>
  <v-toolbar-title>3.G films</v-toolbar-title>
  <v-btn text class="ml-2" to="/">Filmovi</v-btn>
   <v-btn text class="ml-2" to="/">Glumci</v-btn>
   <v-spacer></v-spacer>
    <v-autocomplete
    clearable
    hide-no-data
    hide-selected
    color="white"
    label="search"
    prepend-inner-icon="search"
    flat
    >
    </v-autocomplete>
    <v-btn icon>
      <v-badge color="green" content="2" overlap>
      <v-icon>far fa-bell</v-icon>
      </v-badge>
     </v-btn>
     <v-badge bordened bottom color="red" dot offset-x="10" offset-y="10">
     <v-avatar size="40">
       <v-img src="Edi.jpg"></v-img>
     </v-avatar>
     </v-badge>
  </v-app-bar>
  </nav>
</templete>

<script>
export default{
        data:()=>({
            drawer:null,
        })
}
</script>

<style>


</style>