import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MessageDefinition_AllowedResponse } from './R4_MessageDefinition_AllowedResponse'
import { R4_MessageDefinition_Focus } from './R4_MessageDefinition_Focus'
import { R4_MessageSignificanceCategoryEnum } from './R4_MessageSignificanceCategoryEnum'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_MessageDefinition      extends R4_DomainResource
{

   static def : string = 'MessageDefinition';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   replaces : string [];
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   base : string ;
   parent : string [];
   eventCoding : R4_Coding ;
   eventUri : string ;
   category : R4_MessageSignificanceCategoryEnum ;
   focus : R4_MessageDefinition_Focus [];
   responseRequired : string ;
   allowedResponse : R4_MessageDefinition_AllowedResponse [];
   graph : string [];
}
