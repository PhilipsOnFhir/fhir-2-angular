import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MessageDefinition_AllowedResponse } from './R5_MessageDefinition_AllowedResponse'
import { R5_MessageDefinition_Focus } from './R5_MessageDefinition_Focus'
import { R5_MessageSignificanceCategoryEnum } from './R5_MessageSignificanceCategoryEnum'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_MessageDefinition      extends R5_DomainResource
{

   static def : string = 'MessageDefinition';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   replaces : string [];
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   base : string ;
   parent : string [];
   eventCoding : R5_Coding ;
   eventUri : string ;
   category : R5_MessageSignificanceCategoryEnum ;
   focus : R5_MessageDefinition_Focus [];
   responseRequired : string ;
   allowedResponse : R5_MessageDefinition_AllowedResponse [];
   graph : string [];
}
