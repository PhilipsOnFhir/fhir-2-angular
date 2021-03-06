import { CodeableConcept } from './CodeableConcept'
import { ContactDetail } from './ContactDetail'
import { DomainResource } from './DomainResource'
import { OperationDefinition_Overload } from './OperationDefinition_Overload'
import { OperationDefinition_Parameter } from './OperationDefinition_Parameter'
import { OperationKindEnum } from './OperationKindEnum'
import { PublicationStatusEnum } from './PublicationStatusEnum'
import { UsageContext } from './UsageContext'

export class OperationDefinition      extends DomainResource
{

   static def : string = 'OperationDefinition';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : PublicationStatusEnum ;
   kind : OperationKindEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : ContactDetail [];
   description : string ;
   useContext : UsageContext [];
   jurisdiction : CodeableConcept [];
   purpose : string ;
   affectsState : boolean ;
   code : string ;
   comment : string ;
   base : string ;
   resource : string [];
   system : boolean ;
   type : boolean ;
   instance : boolean ;
   inputProfile : string ;
   outputProfile : string ;
   parameter : OperationDefinition_Parameter [];
   overload : OperationDefinition_Overload [];
}
