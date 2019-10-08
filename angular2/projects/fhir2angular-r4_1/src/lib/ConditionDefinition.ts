import { CodeableConcept } from './CodeableConcept'
import { ConditionDefinition_Medication } from './ConditionDefinition_Medication'
import { ConditionDefinition_Observation } from './ConditionDefinition_Observation'
import { ConditionDefinition_Plan } from './ConditionDefinition_Plan'
import { ConditionDefinition_Precondition } from './ConditionDefinition_Precondition'
import { ConditionDefinition_Questionnaire } from './ConditionDefinition_Questionnaire'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { Reference } from './Reference'
import { UsageContext } from './UsageContext'

export class ConditionDefinition      extends DomainResource
{

   static def : string = 'ConditionDefinition';
   url : string ;
   identifier : Identifier [];
   version : string ;
   name : string ;
   title : string ;
   subtitle : string ;
   status : PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   code : CodeableConcept ;
   severity : CodeableConcept ;
   bodySite : CodeableConcept ;
   stage : CodeableConcept ;
   hasSeverity : boolean ;
   hasBodySite : boolean ;
   hasStage : boolean ;
   definition : string [];
   observation : ConditionDefinition_Observation [];
   medication : ConditionDefinition_Medication [];
   precondition : ConditionDefinition_Precondition [];
   team : Reference [];
   questionnaire : ConditionDefinition_Questionnaire [];
   plan : ConditionDefinition_Plan [];
}
