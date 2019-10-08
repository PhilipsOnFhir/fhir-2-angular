import { R5_BiologicallyDerivedProductCategoryEnum } from './R5_BiologicallyDerivedProductCategoryEnum'
import { R5_BiologicallyDerivedProductStatusEnum } from './R5_BiologicallyDerivedProductStatusEnum'
import { R5_BiologicallyDerivedProduct_Collection } from './R5_BiologicallyDerivedProduct_Collection'
import { R5_BiologicallyDerivedProduct_Manipulation } from './R5_BiologicallyDerivedProduct_Manipulation'
import { R5_BiologicallyDerivedProduct_Processing } from './R5_BiologicallyDerivedProduct_Processing'
import { R5_BiologicallyDerivedProduct_Storage } from './R5_BiologicallyDerivedProduct_Storage'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_BiologicallyDerivedProduct      extends R5_DomainResource
{

   static def : string = 'BiologicallyDerivedProduct';
   identifier : R5_Identifier [];
   productCategory : R5_BiologicallyDerivedProductCategoryEnum ;
   productCode : R5_CodeableConcept ;
   status : R5_BiologicallyDerivedProductStatusEnum ;
   request : R5_Reference [];
   quantity : string ;
   parent : R5_Reference [];
   collection : R5_BiologicallyDerivedProduct_Collection ;
   processing : R5_BiologicallyDerivedProduct_Processing [];
   manipulation : R5_BiologicallyDerivedProduct_Manipulation ;
   storage : R5_BiologicallyDerivedProduct_Storage [];
}
