import mixpanel from 'mixpanel-browser';
mixpanel.init('11622191e792f9484b086b0f7d7b7043');

let env_check = process.env.NODE_ENV === 'production';

let actions = {
    identify: (id) => {
        // console.log(id, "idddd852")
        if (env_check) mixpanel.identify(id);
    },
    alias: (id) => {
        if (env_check) mixpanel.alias(id);
    },
    track: (name, props) => {
        if (env_check) mixpanel.track(name, props);
    },
    people: {
        set: (props) => {
            if (env_check) mixpanel.people.set(props);
        },
    },
};

export let Mixpanel = actions;