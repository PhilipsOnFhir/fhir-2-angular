import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { MessageDefinition_AllowedResponse } from './MessageDefinition_AllowedResponse'
import { MessageDefinition_Focus } from './MessageDefinition_Focus'
import { MessageSignificanceCategoryEnum } from './MessageSignificanceCategoryEnum'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class MessageDefinition      extends DomainResource
{

   static def : string = 'MessageDefinition';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   title : string ;
   replaces : string [];
   status : PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   copyright : string ;
   base : string ;
   parent : string [];
   eventCoding : Coding ;
   eventUri : string ;
   category : MessageSignificanceCategoryEnum ;
   focus : MessageDefinition_Focus [];
   responseRequired : string ;
   allowedResponse : MessageDefinition_AllowedResponse [];
   graph : string [];
}
