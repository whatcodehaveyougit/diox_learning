// ============== The Store

// The store is the entire store of state for your application.

// If everytime you wanted to update the state of the application everything got reloaded
// again that would not be effecient.

// For this reason we have Modules.  You attach state to each module and when a piece of state
// in a module updates, it will just reload the components of that module, rather
// than the entire application = more performant.

// A store is instantiated like this:

const myStore = new Store();

// ============= Modules

// After creating a store it is then adviseable to register modules to it, for example:

myStore.register('exampleForm', exampleForm);

// The frame work for a module is as follows

const exampleForm: Module<{ name: string; }> = {
  state: {
    name: '',
  },
  mutations: {
  },
  actions: {
  },
};

// Using Modules and the Store together

// Now that we have setup our store and added a module to it we will now start calling
// method on the store using that module.

myStore.mutate('nameOfModule', 'MUTATION_NAME', { field: 'name', value: e.target.value });

myStore.mutate('exampleForm', 'CHANGE_VALUE_BANANA', { field: 'name', value: e.target.value });

// Here we are calling the `mutate` method on myStore, we specify the name of the Module and then
// pass something through to the mutation.


// ====== Accessing objects of the state in a component



