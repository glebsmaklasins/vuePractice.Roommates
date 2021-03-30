<template>
   <b-card
    title="Chore Wars App"
    img-src="https://www.workingmother.com/sites/workingmother.com/files/styles/500_1x_/public/import/2015/files/_images/201504/chore-wars-thumbnail.jpg?itok=MBwtJqQH"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 50rem;margin: 0 auto;"
    class="mb-2"
  >
    <b-card-text>
      Welcome to my chore battler, you and your room mates can join the battle and gain points based on the chores completed
    </b-card-text>
  <br>
  <b-card-text>
      Your Name
    </b-card-text>
    <b-form @submit="onSubmit" @reset="onReset">
     
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

     
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
    <b-button href="/tasks" variant="primary">login</b-button>
  </b-card>
</template>

<script>

</script>
