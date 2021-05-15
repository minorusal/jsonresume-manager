<template>
  <div>
    <Tabs>
      <Tab title="Basics" icon="fas fa-user">
        <VueFormGenerator
          :schema="schemas.basics"
          :model="resume.content.basics"
          :options="options"
        />
        <VueFormGenerator
          :schema="schemas.location"
          :model="resume.content.basics.location"
          :options="options"
        />
      </Tab>
      <Tab title="Profiles" icon="fa fa-users">
        <DynamicForm
          title="Profile"
          self="profiles"
          :model="resume.content.basics"
          :schema="schemas.profiles"
        />
      </Tab>
      <Tab title="Work" icon="fa fa-briefcase">
        <DynamicForm
          title="Work"
          self="work"
          :model="resume.content"
          :schema="schemas.work"
          :subforms="subforms.work"
        />
      </Tab>
      <Tab title="Education" icon="fa fa-graduation-cap">
        <DynamicForm
          title="Education"
          self="education"
          :model="resume.content"
          :schema="schemas.education"
          :subforms="subforms.education"
        />
      </Tab>
      <Tab title="Skills" icon="fa fa-lightbulb">
        <DynamicForm
          title="Skill"
          self="skills"
          :model="resume.content"
          :schema="schemas.skills"
          :subforms="subforms.skills"
        />
      </Tab>
      <Tab title="Awards" icon="fa fa-trophy">
        <DynamicForm
          title="Awards"
          self="awards"
          :model="resume.content"
          :schema="schemas.awards"
        />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import FieldResumePicture from './vfg/FieldResumePicture';
import Tabs from './tabs/Tabs';
import Tab from './tabs/Tab';
import basics from './schema/basics/basics';
import location from './schema/basics/location';
import profiles from './schema/basics/profiles';
import work from './schema/work';
import education from './schema/education';
import awards from './schema/awards';
import skills from './schema/skills';
import { component as VueFormGenerator } from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import DynamicForm from './dynamic/DynamicForm';
import ListForm from './dynamic/LIstForm';
export default {
  name: 'ResumeForm',

  components: {
    Tabs,
    Tab,
    VueFormGenerator,
    FieldResumePicture,
    DynamicForm,
  },

  data() {
    return {
      resume: {
        title: '',
        content: {
          basics: {
            location: {},
          },
        },
      },
      schemas: {
        basics,
        location,
        profiles,
        work,
        education,
        skills,
        awards,
      },

      subforms: {
        work: [
          {
            component: ListForm,
            props: {
              title: 'Highlights',
              self: 'highlights',
              placeholder: 'Started the company',
            },
          },
        ],
        education: [
          {
            component: ListForm,
            props: {
              title: 'Courses',
              self: 'courses',
              placeholder: 'SQL',
            },
          },
        ],
        skills: [
          {
            component: ListForm,
            props: {
              title: 'Keywords',
              self: 'keywords',
              placeholder: 'Javascript',
            },
          },
        ],
      },

      options: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    };
  },
};
</script>
