import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MessageDefinition_AllowedResponse } from './R4_1_MessageDefinition_AllowedResponse'
import { R4_1_MessageDefinition_Focus } from './R4_1_MessageDefinition_Focus'
import { R4_1_MessageSignificanceCategoryEnum } from './R4_1_MessageSignificanceCategoryEnum'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_MessageDefinition      extends R4_1_DomainResource
{

   static def : string = 'MessageDefinition';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   replaces : string [];
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   base : string ;
   parent : string [];
   eventCoding : R4_1_Coding ;
   eventUri : string ;
   category : R4_1_MessageSignificanceCategoryEnum ;
   focus : R4_1_MessageDefinition_Focus [];
   responseRequired : string ;
   allowedResponse : R4_1_MessageDefinition_AllowedResponse [];
   graph : string [];
}
