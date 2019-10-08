import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_OperationDefinition_Overload } from './R5_OperationDefinition_Overload'
import { R5_OperationDefinition_Parameter } from './R5_OperationDefinition_Parameter'
import { R5_OperationKindEnum } from './R5_OperationKindEnum'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_OperationDefinition      extends R5_DomainResource
{

   static def : string = 'OperationDefinition';
   url : string ;
   version : string ;
   name : string ;
   title : string ;
   status : R5_PublicationStatusEnum ;
   kind : R5_OperationKindEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
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
   parameter : R5_OperationDefinition_Parameter [];
   overload : R5_OperationDefinition_Overload [];
}
