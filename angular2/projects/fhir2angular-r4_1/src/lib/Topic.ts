import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { Topic_CanFilterBy } from './Topic_CanFilterBy'
import { Topic_ResourceTrigger } from './Topic_ResourceTrigger'
import { UsageContext } from './UsageContext'

export class Topic      extends DomainResource
{

   static def : string = 'Topic';
   url : string ;
   identifier : Identifier [];
   version : string ;
   title : string ;
   derivedFromCanonical : string [];
   derivedFromUri : string [];
   status : PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : Reference ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : Period ;
   resourceTrigger : Topic_ResourceTrigger ;
   canFilterBy : Topic_CanFilterBy [];
}
