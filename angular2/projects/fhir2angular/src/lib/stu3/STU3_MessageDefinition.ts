import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_MessageDefinition_AllowedResponse } from './STU3_MessageDefinition_AllowedResponse'
import { STU3_MessageDefinition_Focus } from './STU3_MessageDefinition_Focus'
import { STU3_MessageSignificanceCategoryEnum } from './STU3_MessageSignificanceCategoryEnum'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_Reference } from './STU3_Reference'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_MessageDefinition      extends STU3_DomainResource
{

   static def : string = 'MessageDefinition';
   url : string ;
   identifier : STU3_Identifier ;
   version : string ;
   name : string ;
   title : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   description : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   base : STU3_Reference ;
   parent : STU3_Reference [];
   replaces : STU3_Reference [];
   event : STU3_Coding ;
   category : STU3_MessageSignificanceCategoryEnum ;
   focus : STU3_MessageDefinition_Focus [];
   responseRequired : boolean ;
   allowedResponse : STU3_MessageDefinition_AllowedResponse [];
}
